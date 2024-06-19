import { useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import Button from '@/components/common/Button/Button'
import Heading from '@/components/common/Heading/Heading'
import Text from '@/components/common/Text/Text'
// import Coin from '../../../public/coin.svg'
import styles from './index.module.scss'
import Lottie from 'lottie-react'
import coinAnimation from '../../../public/animation/coin.json'

interface CreateAccountFlowProps {
  theme: 'light' | 'dark'
  onAccountCreate: () => void
}

function CreateAccountFlow({ theme = 'light', onAccountCreate }: CreateAccountFlowProps) {
  const { t } = useTranslation();

  useEffect(() => {}, [])

  const handleCreateAccount = () => {
    onAccountCreate()
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Lottie animationData={coinAnimation} className={styles.logo} />
        <Heading theme={theme} size="h1">
          {t('flows.createAccount.title')}
        </Heading>
        <Text color="primary" size="large">
          {t('flows.createAccount.description')}
        </Text>
      </div>
      <div className={styles.footer}>
        <Button onClick={handleCreateAccount} variant="primary" isFullWidth>
          {t('flows.createAccount.button')}
        </Button>
      </div>
    </div>
  );
}

export default CreateAccountFlow