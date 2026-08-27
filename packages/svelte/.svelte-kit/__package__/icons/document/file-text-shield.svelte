<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13 3v4a.997.997 0 0 0 1 1h4m-5-5H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5m2-18 5 5m0 0v3.5M8 9h1m-1 3.994h3m-3 4.003h2m11-1.003c0 4-2.5 6-3.5 6s-3.5-2-3.5-6c1 0 2.5-.5 3.5-1.5 1 1 2.5 1.5 3.5 1.5\"/>";
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
