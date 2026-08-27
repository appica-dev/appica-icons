<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16 8a3 3 0 0 1 3 3 8 8 0 0 1-16 0c0 2.21 2.239 4 5 4s5-1.79 5-4a3 3 0 0 1 3-3m0 0c0-2 2-4 4-4\"/>";
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
