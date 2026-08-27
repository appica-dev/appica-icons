<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m13 12 5.5-7M7.64 3l4.86 9 1.187-9M4.484 6.717 11.987 12M3 12l8.987.473m.237.704L7 20m-2.158-3.132 6.44-3.892M11.5 21l1.165-7.823M21 14l-7.815-1.332M21 10.578l-8 1.744m3.779 7.324-3.891-6.269m6.469 4.83-6.044-5.218\"/>";
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
