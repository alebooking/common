import { Timestamp } from "@grpc/grpc-js/build/src/generated/google/protobuf/Timestamp";


export function timestampToISO(ts: Timestamp): string | null {
    return new Date(Number(ts.seconds) * 1000 + ts.nanos / 1_000_000).toISOString()
}