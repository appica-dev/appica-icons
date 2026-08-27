<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18.781 4a.967.967 0 0 1 .962.858l.007.114v8.75a.974.974 0 0 1-.855.966l-.114.006H6.188v5.834a.974.974 0 0 1-.856.965l-.113.007a.967.967 0 0 1-.962-.858l-.007-.114V4.972a.974.974 0 0 1 .855-.965L5.22 4z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
