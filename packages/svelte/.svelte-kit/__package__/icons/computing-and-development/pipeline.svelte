<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 4h8M4 4v5a6 6 0 0 0 6 6h3a1 1 0 0 1 1 1v4M10 4v4a1 1 0 0 0 1 1h3a6 6 0 0 1 6 6v5m-7 0h8M12 9v6\"/>";
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
