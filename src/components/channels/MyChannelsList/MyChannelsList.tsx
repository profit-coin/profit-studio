import { Trans } from 'next-i18next';
import { useChannels } from '@/data/channels';
import styles from './MyChannelsList.module.scss';
import Text from '@/components/common/Text/Text';
import ChannelCard from '../ChannelCard/ChannelCard';

function MyChannelsList () {
  const { data: channels, isLoading } = useChannels();

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
        <ChannelCard key={channel.id} channel={channel} />
      ))}
    </div>
  );
}

export default MyChannelsList;
