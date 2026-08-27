<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.5 7.75V5.625A2.125 2.125 0 0 1 5.625 3.5H7.75M3.5 16.25v2.125A2.125 2.125 0 0 0 5.625 20.5H7.75m8.5-17h2.125A2.125 2.125 0 0 1 20.5 5.625V7.75M16.25 20.5h2.125a2.125 2.125 0 0 0 2.125-2.125V16.25M6.688 12V8.813m0 0h3.187m-3.187 0 4.69 4.69c.398.398.622.938.622 1.502m2.125-6.193h3.188m0 0V12m0-3.187-4.69 4.69A2.13 2.13 0 0 0 12 15.004m0 0v2.307\"/>";
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
