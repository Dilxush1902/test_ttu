import SEO from 'components/SEO'
import ThirdStep from 'components/UI/Personal/PersonalSteps/ThirdStep/ThirdStep'
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
      <ThirdStep user={user.data?.data} />
    </>
  )
}
