import { InternalChannel } from '@/data/channels';
import Heading from '../../common/Heading/Heading';
import styles from './ChannelHeader.module.scss';
import Text from '../../common/Text/Text';
import Balance from '../../Balance/Balance';
import ChannelAvatar from '../ChannelAvatar/ChannelAvatar';

interface ChannelHeaderProps {
  channel: InternalChannel;
}

function ChannelHeader ({ channel }: ChannelHeaderProps) {
  return (
    <div className={styles.header}>
      <ChannelAvatar channel={channel} size="large" />
      <Heading size="h2" className={styles.name}>{channel.title}</Heading>
      <Text size="small">{channel.members} subscribers</Text>
      <Balance balance={channel.balance} size="large" />
    </div>
  );
}

export default ChannelHeader;
