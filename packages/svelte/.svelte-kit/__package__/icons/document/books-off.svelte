<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 9v10m0 0a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5m4 14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6M8 4a1 1 0 0 1 1 1 1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4M5 8h3m1 8h4m1.254-5.756L13.036 5.82a1.02 1.02 0 0 1 .634-1.219l.133-.041 2.184-.53c.562-.135 1.133.19 1.282.732l3.236 11.75m-.92 3.077-1.572.38c-.562.136-1.133-.19-1.282-.731l-.952-3.458M14 9l4-1m1.207 7.199.716-.18M3 3l18 18\"/>";
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
