export function timestampToISO(ts: {seconds: number, nanos: number}): string | null {
    return new Date(ts.seconds * 1000 + ts.nanos / 1_000_000).toISOString()
}