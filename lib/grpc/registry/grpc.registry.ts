import { PROTO_PATH } from '@alebooking/contracts'

export interface GrpcClientOptions {
	package: string
	protoPath: string
	env: string
}

export const GRPC_CLIENTS = {
	AUTH_PACKAGE: {
		package: 'auth.v1',
		protoPath: PROTO_PATH.AUTH,
		env: 'AUTH_GRPC_URL'
	},
	ACCOUNT_PACKAGE: {
		package: 'account.v1',
		protoPath: PROTO_PATH.ACCOUNT,
		env: 'AUTH_GRPC_URL'
	},
	USER_PACKAGE: {
		package: 'user.v1',
		protoPath: PROTO_PATH.USER,
		env: 'USER_GRPC_URL'
	},
	MEDIA_PACKAGE: {
		package: 'media.v1',
		protoPath: PROTO_PATH.MEDIA,
		env: 'MEDIA_GRPC_URL'
	}
} as const satisfies Record<string, GrpcClientOptions>
