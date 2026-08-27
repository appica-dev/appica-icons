<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.916 11.707a3.001 3.001 0 0 0-5.794-1.552A3 3 0 0 0 12 14m-.009 7.485a2 2 0 0 1-1.404-.585l-4.244-4.243a8 8 0 1 1 13.651-5.351M20.2 20.2 22 22m-7-4a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
