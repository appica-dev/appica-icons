<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m10 10 6.5 6.5m-2.08-7.442L9.06 14.421a1.978 1.978 0 0 1-3.275-.773L3.102 5.604a1.978 1.978 0 0 1 2.502-2.502l8.044 2.682a1.978 1.978 0 0 1 .773 3.274m4.928 7.517 1.08 1.079a1.96 1.96 0 1 1-2.774 2.772l-1.08-1.079a1.96 1.96 0 0 1 2.773-2.772\"/>";
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
