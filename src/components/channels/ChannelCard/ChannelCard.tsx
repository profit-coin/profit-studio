import styles from './ChannelCard.module.scss';
import Heading from '@/components/common/Heading/Heading';
import Text from '@/components/common/Text/Text';
import Balance from '@/components/Balance/Balance';
import { InternalLink } from '@/components/common/Link/Link';
import { InternalChannel } from '@/data/channels';

interface ChannelCardProps {
  channel: InternalChannel;
}

function ChannelCard ({ channel }: ChannelCardProps) {
  return (
    <InternalLink to={`/channels/${channel.telegramId}`} className={styles.card}>
      {channel.avatar ?
        <img src={channel.avatar} alt={channel.title} className={styles.image} />
      : <div className={styles.defaultImage}>{channel.title[0]}</div>}
      <div className={styles.info}>
        <Heading size="h4" align="left" className={styles.name}>{channel.title}</Heading>
        <Text align="left" size="tiny" className={styles.subscribers}>{channel.members} subscribers</Text>
        <Balance balance={channel.balance} size="small" />
      </div>
    </InternalLink>
  );
}

export default ChannelCard;
