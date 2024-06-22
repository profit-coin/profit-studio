import Heading from '@/components/common/Heading/Heading'
import Text from '@/components/common/Text/Text';
import styles from './GetNewMembersAndMonetize.module.scss';
import Background from '../../../../public/banner-background-2.svg'
import Box from '@/components/common/Box/Box';

function GetNewMembersAndMonetizeBanner () {
  return (
    <Box mb="6">
      <div className={styles.banner}>
        <Background className={styles.background} />
        <div className={styles.content}>
          <Heading size="h3" align="left" className={styles.title}>New era of monetization</Heading>
          <Text size="small" align="left" className={styles.text}>
            Get new members and monetize your community with our new features.
          </Text>
        </div>
      </div>
    </Box>
  );
}

export default GetNewMembersAndMonetizeBanner;
