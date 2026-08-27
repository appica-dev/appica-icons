<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.456 20.87q-.23.07-.463.13a12.01 12.01 0 0 1-7.432-5.7A12 12 0 0 1 3.487 6a12.01 12.01 0 0 0 8.506-3A12.01 12.01 0 0 0 20.5 6c.61 2.075.648 4.275.11 6.37M15.996 19H22m-3.002-3v6\"/>";
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
