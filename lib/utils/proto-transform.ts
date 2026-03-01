import { getProtoDateFields } from './proto-date.decorator'

export function plainToProto<T>(
    Dto: new (...args: any[]) => T,
    plain: Record<string, any>
): T {
    const fields = getProtoDateFields(Dto)
    const result = { ...plain }

    for (const field of fields) {
        const date: Date | undefined = plain[field]
        if (date instanceof Date) {
            const ms = date.getTime()
            result[field] = {
                seconds: Math.floor(ms / 1000),
                nanos: (ms % 1000) * 1_000_000
            }
        }
    }

    return result as T
}

export function protoToPlain<T>(
    Dto: new (...args: any[]) => T,
    proto: Record<string, any>
): Record<string, any> {
    const fields = getProtoDateFields(Dto)
    const result = { ...proto }

    for (const field of fields) {
        const ts = proto[field]
        if (ts?.seconds !== undefined) {
            result[field] = new Date(ts.seconds * 1000 + ts.nanos / 1_000_000).toISOString()
        }
    }

    return result
}
