import Box from '@/components/common/Box/Box';
import Input from '@/components/common/form/Input/Input';

interface AddChannelFormProps {
  onSlugChange: (slug: string) => void;
}

function AddChannelForm ({ onSlugChange }: AddChannelFormProps) {
  return (
    <form>
      <Box mb="2">
        <Input
          prefix="@"
          name="slug"
          label="Channel slug"
          isFullWidth
          onChange={(e) => onSlugChange(e.target.value)}
        />
      </Box>
    </form>
  );
}

export default AddChannelForm;
