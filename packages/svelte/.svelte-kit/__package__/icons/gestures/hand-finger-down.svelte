<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11 13v7.5a1.5 1.5 0 0 1-3 0V12l-1.47 1.47a1.87 1.87 0 0 1-2.28.28 1.5 1.5 0 0 1-.536-2.022Q6.532 6.718 7 6l.196-.3A6 6 0 0 1 12.208 3H12h2a6 6 0 0 1 6 6v4.5a1.5 1.5 0 0 1-3 0m-6 0v2a1.5 1.5 0 1 0 3 0V13m0 1.5a1.5 1.5 0 1 0 3 0V13\"/>";
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
