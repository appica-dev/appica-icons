<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 12h-2c-.893 0-1.662-.857-1.76-2-.296-3.45-.75-6-2.75-6s-2.5 3.582-2.5 8-.5 8-2.5 8-2.451-2.547-2.748-6c-.1-1.147-.867-2-1.763-2h-2\"/>";
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
