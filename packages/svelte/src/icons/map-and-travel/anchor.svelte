<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 9v12m0-12a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 12a8 8 0 0 1-8-8m8 8a8 8 0 0 0 8-8m1 0h-2M5 13H3\"/>";
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
