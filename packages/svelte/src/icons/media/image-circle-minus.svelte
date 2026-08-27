<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 8h.01m5.465 7.035A8.998 8.998 0 0 0 12 3a9 9 0 1 0 .525 17.985M4 15l4-4c.928-.893 2.072-.893 3 0l4 4m-1-1 1-1c.928-.893 2.072-.893 3 0l2 2m-4 4h6\"/>";
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
