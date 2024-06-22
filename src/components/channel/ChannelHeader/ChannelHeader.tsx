import { Channel } from '@/data/channels';
import Heading from '../../common/Heading/Heading';
import styles from './ChannelHeader.module.scss';
import Text from '../../common/Text/Text';
import Balance from '../../Balance/Balance';

interface ChannelHeaderProps {
  channel: Channel;
}

function ChannelHeader ({ channel }: ChannelHeaderProps) {
  return (
    <div className={styles.header}>
      <img src={channel.image} alt={channel.name} className={styles.image} />
      <Heading size="h1" className={styles.name}>{channel.name}</Heading>
      <Text size="medium">{channel.subscribers} subscribers</Text>
      <Balance balance={channel.total} size="large" />
    </div>
  );
}

export default ChannelHeader;
