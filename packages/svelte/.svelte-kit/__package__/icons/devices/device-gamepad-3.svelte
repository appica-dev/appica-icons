<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 12 6 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2zm6 0 3-3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2zm-3 3-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2zm0-6L9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2z\"/>";
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
