import Image from 'next/image'

const ProfilePicture = () => (
  <Image
    src="/images/profile.jpeg"
    height={144}
    width={144}
    alt="Profile Picture"
  />
)

export default ProfilePicture
