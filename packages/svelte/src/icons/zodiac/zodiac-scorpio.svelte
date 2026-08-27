<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 4a2 2 0 0 1 2 2m0 0v9m0-9a2 2 0 1 1 4 0m0 0v9m0-9a2 2 0 1 1 4 0v10a3 3 0 0 0 3 3h5m0 0-3-3m3 3-3 3\"/>";
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
