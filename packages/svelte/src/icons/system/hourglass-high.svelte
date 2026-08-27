<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.5 7h11M12 12a6 6 0 0 0-6 6v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a6 6 0 0 0-6-6m0 0a6 6 0 0 1-6-6V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a6 6 0 0 1-6 6\"/>";
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
