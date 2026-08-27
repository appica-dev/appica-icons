<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18.61 19.61a3.9 3.9 0 0 0 1.14-2.749V4.222a.97.97 0 0 0-.972-.972H9.056a.97.97 0 0 0-.973.972v9.272a3.888 3.888 0 0 0-4.694 6.117 3.889 3.889 0 0 0 6.639-2.75V9.083h7.778v4.411a3.888 3.888 0 1 0-1.945 7.256c1.031 0 2.02-.41 2.75-1.14\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
