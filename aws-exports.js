const config = {
	Auth: {
		region: 'us-east-1',
		userPoolId: 'us-east-1_ocRVtiiFg',
		userPoolWebClientId: 's6t4k5vmnu6ij9c0jg22n1lnc',
		identityPoolId: 'us-east-1:fcee484c-f3c4-4ace-a478-4c96a6edb3a7',
	},
	// kinda guessing with the format here🤷🏽‍♂️
	// https://github.com/aws-amplify/amplify-js/blob/e54617f2878244f0e391d2d49f5cd2e8a8c069f9/packages/core/src/Parser.ts#L33-L48
	Storage: {
		AWSS3: {
			bucket: 'appsyncwiths3backendstack-s3bucket64cb25af-1v4x4j5z0c7z1',
			region: 'us-east-1',
		},
	},
}

export default config
