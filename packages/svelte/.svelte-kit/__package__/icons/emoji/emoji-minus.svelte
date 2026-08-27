<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.48 15.014a9 9 0 1 0-7.956 5.97M9 10h.01M15 10h.01m.99 9h6M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1\"/>";
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
