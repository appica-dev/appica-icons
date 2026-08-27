<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.697M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m4 7V7a2 2 0 0 0-2-2h-2m-6 6h4m-4 4h3m7.5 4.5L21 22m-7-4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0\"/>";
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
