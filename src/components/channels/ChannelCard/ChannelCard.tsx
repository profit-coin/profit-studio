import { ChannelListItem } from '@/data/channels';
import styles from './ChannelCard.module.scss';
import Heading from '@/components/common/Heading/Heading';
import Text from '@/components/common/Text/Text';
import Balance from '@/components/Balance/Balance';
import {InternalLink} from '@/components/common/Link/Link';

interface ChannelCardProps {
  channel: ChannelListItem;
}

function ChannelCard ({ channel }: ChannelCardProps) {
  return (
    <InternalLink to={`/channels/${channel.slug}`} className={styles.card}>
      <img src={channel.image} alt={channel.name} className={styles.image} />
      <div className={styles.info}>
        <Heading color="inverse" size="h4" align="left" className={styles.name}>{channel.name}</Heading>
        <Text color="primaryInverse" align="left" size="tiny" className={styles.subscribers}>{channel.subscribers} subscribers</Text>
        <Balance color="primaryInverse" balance={channel.total} size="small" />
      </div>
    </InternalLink>
  );
}

export default ChannelCard;
