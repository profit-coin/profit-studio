import { Trans } from 'next-i18next';
import { useChannels } from '@/data/channels';
import styles from './MyChannelsList.module.scss';
import Text from '@/components/common/Text/Text';
import ChannelCard from '../ChannelCard/ChannelCard';
import Loader from '@/components/common/Loader/Loader';
import { useAuth } from '@/auth/authContext';

function MyChannelsList () {
  const { user } = useAuth();
  console.log(user);
  const { data: channels, isLoading } = useChannels(user?.telegramId);
  
  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (channels?.length === 0) {
    return (
      <Text size="large" color="primary">
        <Trans i18nKey="myChannelsList.empty" />
      </Text>
    )
  }

  return (
    <div className={styles.list}>
      {!isLoading && channels?.map((channel) => (
        <ChannelCard key={channel.telegramId} channel={channel} />
      ))}
    </div>
  );
}

export default MyChannelsList;
