<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m7.5 12 .827 2.696C9.82 19.566 10.567 22 12 22s2.18-2.435 3.673-7.304L16.5 12m-4.047-1.692C11.717 11.33 10.483 12 9.083 12 6.828 12 5 10.259 5 8.111 5 6.228 6.406 4.657 8.272 4.3 8.911 2.944 10.34 2 12 2c2.072 0 3.783 1.47 4.048 3.374m-3.595 4.934C13.054 11.318 14.193 12 15.5 12c1.933 0 3.5-1.492 3.5-3.333 0-1.664-1.28-3.043-2.952-3.293m-3.595 4.934A3.2 3.2 0 0 1 12 8.667m3.69-1.111a3.72 3.72 0 0 0 .358-2.182\"/>";
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
