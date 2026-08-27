<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3 3 18 18m-9 .5v-3.75m0 .25-2.99-.802a4.984 4.984 0 0 1-3.524-6.104l.43-1.604 2.407.644A4.98 4.98 0 0 1 12 14.56M12 18v-3.44M12 18l2.99-.801a5 5 0 0 0 1.516-.694M12 14.56a5 5 0 0 1 .582-1.978m-2.333-8.331.021-.021L12 2.5l1.73 1.73a4.88 4.88 0 0 1 1.258 4.758M10.27 11.15a4.9 4.9 0 0 1-1.246-2.118m7.014 1.005 2.046-.547.431 1.604c.142.53.193 1.063.162 1.583\"/>";
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
