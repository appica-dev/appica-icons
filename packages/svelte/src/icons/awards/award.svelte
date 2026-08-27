<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.001 15.074a6.14 6.14 0 0 1-4.318-1.768 6 6 0 0 1-1.789-4.27c0-1.6.644-3.136 1.789-4.268A6.14 6.14 0 0 1 12 3c1.62 0 3.173.636 4.318 1.768a6 6 0 0 1 1.789 4.269 6 6 0 0 1-1.789 4.269 6.14 6.14 0 0 1-4.318 1.768m0 0L15.461 21l1.627-3.253 3.662.233-3.46-5.925m-10.58 0-3.46 5.927 3.662-.235L8.538 21 12 15.074\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
