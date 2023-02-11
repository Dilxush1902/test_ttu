import SEO from 'components/SEO'
import SecondStep from 'components/UI/Personal/PersonalSteps/SecondStep/SecondStep'
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
      <SecondStep user={user.data?.data} />
    </>
  )
}
