import { InternalChannel } from '@/data/channels';
import Heading from '../../common/Heading/Heading';
import styles from './ChannelHeader.module.scss';
import Text from '../../common/Text/Text';
import Balance from '../../Balance/Balance';

interface ChannelHeaderProps {
  channel: InternalChannel;
}

function ChannelHeader ({ channel }: ChannelHeaderProps) {
  return (
    <div className={styles.header}>
      <img src={channel.avatar} alt={channel.title} className={styles.image} />
      <Heading size="h1" className={styles.name}>{channel.title}</Heading>
      <Text size="medium">{channel.members} subscribers</Text>
      <Balance balance={channel.balance} size="large" />
    </div>
  );
}

export default ChannelHeader;
