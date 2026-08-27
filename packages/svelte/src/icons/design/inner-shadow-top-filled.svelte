<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.106 5.106c3.807-3.808 9.98-3.808 13.788 0s3.808 9.98 0 13.788-9.98 3.808-13.788 0-3.808-9.98 0-13.788m11.72 2.068a6.825 6.825 0 0 0-9.652 0 .975.975 0 0 0 1.378 1.378 4.875 4.875 0 0 1 6.896 0 .975.975 0 0 0 1.378-1.378\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
