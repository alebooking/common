const PROTO_DATE_FIELDS = Symbol('proto:date_fields')

export function ProtoDate(): PropertyDecorator {
    return (target, propertyKey) => {
        const fields: string[] = (target as any)[PROTO_DATE_FIELDS] ?? []
        fields.push(propertyKey as string)
        ;(target as any)[PROTO_DATE_FIELDS] = fields
    }
}

export function getProtoDateFields(cls: new (...args: any[]) => any): string[] {
    return cls.prototype[PROTO_DATE_FIELDS] ?? []
}
