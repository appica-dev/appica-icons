<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 5C14.886 3 9.114 3 4 5m8 16 3-11c2.359 0 3 0 3 1 0 0 1.18-1.745 2-3-3.077-1.464-6-1-6-1l-2 2-2-2s-2.923-.464-6 1c.82 1.255 2 3 2 3 0-1 .744-1 3-1z\"/>";
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
