<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 14v7m0-7a4 4 0 1 0 0-8m0 8a4 4 0 1 1 0-8M9 18h6M12 6a3 3 0 0 0 3-3m-3 3a3 3 0 0 1-3-3\"/>";
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
