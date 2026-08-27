<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12 12.998-2-2.001m2 1 2-2M12 21V7.996m-2.176 8.002a3 3 0 0 1-2.744-3.69 3 3 0 0 1 .304-4.835A3.001 3.001 0 0 1 12 3.765a3 3 0 0 1 4.615 3.708 3 3 0 0 1 .305 4.834A3 3 0 0 1 14 16.003h-4z\"/>";
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
