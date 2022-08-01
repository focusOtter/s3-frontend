import {
	Button,
	Image,
	TextField,
	withAuthenticator,
} from '@aws-amplify/ui-react'
import { Storage } from 'aws-amplify'
import { useState } from 'react'

const Home = ({ signOut }) => {
	const [s3Image, setS3Image] = useState('')
	const handleSubmit = async (e) => {
		e.preventDefault()

		// const dogPicFile = e.target.dogPic.files[0]
		// console.log(dogPicFile)
		// const dogPicName = dogPicFile.name
		// const picData = await Storage.put(dogPicName, dogPicFile, {
		// 	contentType: dogPicFile.type,
		// 	level: 'private',
		// })
		// console.log(picData)
		// console.log(dogPicName)

		const dogURL = await Storage.get(
			'Youtube Thumbnail Income great ideas low investment.png',
			{
				level: 'private',
				identityId: 'us-east-1:d4bbb564-df34-492c-8c99-e8be795051bb',
			}
		)

		console.log('the dog URL', dogURL)
		setS3Image(dogURL)
	}
	return (
		<>
			<Button onClick={signOut}>Sign Out</Button>
			<Image src={s3Image} height="400px" width="400px" />
			<form onSubmit={handleSubmit}>
				<TextField type="file" label="Choose a pic" name="dogPic" />
				<Button type="submit" variation="primary">
					Submit
				</Button>
			</form>
		</>
	)
}

// export default withAuthenticator(Home, { signUpAttributes: ['email'] })
export default Home
