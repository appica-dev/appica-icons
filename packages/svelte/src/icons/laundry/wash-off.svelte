<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3 6 1.721 10.329A2 2 0 0 0 6.694 18h10.612q.314-.001.6-.092m1.521-2.472L21 6M3.486 8.965Q3.739 8.996 4 9c.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5m4.92.919c.428-.083.805-.227 1.08-.418.461-.322 1.21-.508 2-.5.79-.008 1.539.178 2 .5.461.32 1.21.508 2 .5.17 0 .339-.015.503-.035M3 3l18 18\"/>";
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
