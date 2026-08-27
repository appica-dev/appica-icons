<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h3a2 2 0 0 0 2-2V9a2 2 0 0 1 2-2h7m0 0-3-3m3 3-3 3\"/>";
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
