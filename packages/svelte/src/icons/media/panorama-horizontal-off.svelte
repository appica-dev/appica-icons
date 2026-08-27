<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.95 6.952q4.352.225 8.705-1.42A1 1 0 0 1 21 6.466V17m-3.212.806q-6.724-1.922-13.449.622A.994.994 0 0 1 3 17.493V6.466a1 1 0 0 1 1.338-.935q.882.332 1.764.59M3 3l18 18\"/>";
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
