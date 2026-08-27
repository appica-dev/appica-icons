<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0m5 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0M4 16a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
