<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.106 5.106c3.807-3.808 9.98-3.808 13.788 0s3.808 9.98 0 13.788-9.98 3.808-13.788 0-3.808-9.98 0-13.788m11.72 2.068a.975.975 0 0 0-1.378 1.378 4.876 4.876 0 0 1 0 6.896.975.975 0 0 0 1.378 1.378 6.826 6.826 0 0 0 0-9.652\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
