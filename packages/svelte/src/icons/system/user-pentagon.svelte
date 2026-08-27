<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 20.703V20a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v.707M13.163 2.168l8.02 5.828c.695.504.985 1.397.72 2.212l-3.064 9.43a1.98 1.98 0 0 1-1.881 1.367H7.042a1.98 1.98 0 0 1-1.881-1.367l-3.064-9.43a1.98 1.98 0 0 1 .719-2.212l8.02-5.828a1.98 1.98 0 0 1 2.327 0M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6\"/>";
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
