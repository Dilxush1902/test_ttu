import SEO from 'components/SEO'
import FirstStep from 'components/UI/Personal/PersonalSteps/FirstStep/FirstStep'
import { useUser } from 'services/user'
import cookies from 'js-cookie'

export default function AdmissionPage() {
  const userId = cookies.get('userId')
  const { user } = useUser({
    userId
  })
  return (
    <>
      <SEO />
      <FirstStep user={user.data?.data} />
    </>
  )
}
